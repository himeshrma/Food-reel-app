require("dotenv").config(); // ✅ Make sure env is loaded even if server.js didn’t load it yet
const ImageKit = require("imagekit");

// Debug check — so you can see if env variables exist
console.log("🔍 Checking ImageKit ENV:", {
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY ? "✅ Present" : "❌ Missing",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY ? "✅ Present" : "❌ Missing",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT ? "✅ Present" : "❌ Missing",
});

let imageKit = null;

try {
  imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });
  console.log("✅ ImageKit initialized successfully");
} catch (err) {
  console.error("❌ Error initializing ImageKit:", err.message);
}

async function uploadFile(file, fileName) {
  if (!imageKit) {
    throw new Error("ImageKit not initialized! Check your .env variables.");
  }

  const result = await imageKit.upload({
    file: file,
    fileName: fileName,
  });
  return result;
}

module.exports = { uploadFile };
