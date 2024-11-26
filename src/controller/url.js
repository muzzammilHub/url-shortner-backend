import Url from '../model/url.js';
import shortid from 'shortid';

const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    
    // Check if URL already exists
    let existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
      return res.status(200).json({
        shortUrl: `${req.protocol}://${req.get('host')}/${existingUrl.shortId}`,
        shortId: existingUrl.shortId
      });
    }

    // Generate unique short ID
    const shortId = shortid.generate();

    // Create new URL entry
    const newUrl = new Url({
      originalUrl,
      shortId
    });

    await newUrl.save();

    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get('host')}/${shortId}`,
      shortId
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error while shortening URL' });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    // Find and update URL statistics
    const url = await Url.findOneAndUpdate(
      { shortId },
      { 
        $inc: { clicks: 1 },
        $set: { lastAccessedAt: new Date() }
      },
      { new: true }
    );

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ error: 'Server error while redirecting' });
  }
};

const getUrlStats = async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    res.status(200).json({
      originalUrl: url.originalUrl,
      totalClicks: url.clicks,
      lastAccessedAt: url.lastAccessedAt,
      createdAt: url.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error while retrieving stats' });
  }
};

export {
    getUrlStats,
    redirectUrl,
    shortenUrl
}