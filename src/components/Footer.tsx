export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-100 text-sm text-gray-600 p-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        
        {/* LINKS Section */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-800 mb-2">LINKS</h3>
          <ul className="space-y-1">
            <li>Support</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* PLATFORMS Section */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-800 mb-2">PLATFORMS</h3>
          <ul className="space-y-1">
            <li>Twitter/X scheduler</li>
            <li>Instagram scheduler</li>
            <li>LinkedIn scheduler</li>
            <li>Facebook scheduler</li>
            <li>TikTok scheduler</li>
            <li>YouTube scheduler</li>
            <li>Bluesky scheduler</li>
            <li>Threads scheduler</li>
            <li>Pinterest scheduler</li>
          </ul>
        </div>

        {/* LEGAL Section */}
        <div className="min-w-[150px]">
          <h3 className="font-semibold text-gray-800 mb-2">LEGAL</h3>
          <ul className="space-y-1">
            <li>Terms of service</li>
            <li>Privacy policy</li>
          </ul>
        </div>

      </div>

      {/* Description Section (full width) */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="text-sm">
          Post content to multiple social media platforms at the same time, all-in-one place. Cross posting made easy.
        </p>
        <p className="text-xs mt-2">
          © 2025 - All rights reserved
        </p>
      </div>
    </footer>
  );
}
