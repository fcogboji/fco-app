// src/app/page.tsx


export default function Home() {
  return (
    <div>
     

      {/* Hero Section */}
      <section className="text-center p-12">
        <h1 className="text-5xl font-bold mb-4">Schedule your content everywhere in seconds</h1>
        <p className="text-lg mb-8">
          The simplest way to post and grow on all platforms. Built for creators and small teams without the ridiculous price tag.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">Watch Demo Video</button>
      </section>

      {/* Features */}
      <section id="features" className="p-12">
        <h2 className="text-4xl font-bold mb-8">Post to all major platforms in one click</h2>
        <ul className="space-y-4">
          <li>Schedule content for the perfect posting time</li>
          <li>Customize content for each platform</li>
          <li>Generate viral videos using our studio templates</li>
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="p-12">
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-xl my-4">$9/month</p>
            <p>5 connected accounts, unlimited posts, schedule posts, carousel posts</p>
          </div>
          {/* Creator */}
          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">Creator</h3>
            <p className="text-xl my-4">$18/month</p>
            <p>15 accounts, content studio access, all starter features</p>
          </div>
          {/* Pro */}
          <div className="p-6 border rounded-xl">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-xl my-4">$27/month</p>
            <p>Unlimited accounts, viral growth consulting</p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="p-12">
        <h2 className="text-4xl font-bold mb-8">All platforms</h2>
        <p>Twitter, Instagram, LinkedIn, Facebook, TikTok, YouTube, Bluesky, Threads, Pinterest</p>
      </section>

      {/* Reviews */}
      <section id="reviews" className="p-12">
        <h2 className="text-4xl font-bold mb-8">Loved by 6606 small businesses</h2>
        <blockquote className="italic">&quot;PostBridge saved me 3+ hours a week! It&#39;s a game changer&quot;</blockquote>
      </section>

      {/* FAQ */}
      <section id="faq" className="p-12">
        <h2 className="text-4xl font-bold mb-8">FAQ</h2>
        <p>Can I cancel anytime? - Yes.</p>
        <p>What social media platforms are supported? - All major ones!</p>
      </section>
    </div>
  );
}
