export default function HomePage() {
  return (
    <main class="mx-auto p-4 max-w-6xl">
      {/* Hero Section */}
      <div class="text-center py-20">
        <h1 class="text-7xl text-red-700 font-bold mb-6">
          <span class="inline-block transform hover:scale-105 transition-transform duration-200">Rafka</span>
        </h1>
        <p class="text-2xl mb-8 text-red-700/80 max-w-3xl mx-auto">
          A blazingly fast, distributed message queue broker 
          <span class="block mt-2 text-red-600">Built with ❤️ using Rust</span>
        </p>
        <div class="flex gap-4 justify-center">
          <a 
            href="/docs" 
            class="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started →
          </a>
          <a 
            href="https://github.com/wyattgill9/rafka" 
            class="bg-red-50 text-red-700 border-2 border-red-200 px-8 py-4 rounded-lg hover:bg-red-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div class="grid md:grid-cols-3 gap-8 my-16">
        <div class="p-8 border-2 border-red-100 rounded-xl hover:border-red-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1">
          <div class="text-3xl mb-4">⚡</div>
          <h2 class="text-2xl font-bold text-red-700 mb-4">Lightning Fast</h2>
          <p class="text-red-900/70">Built with Rust for maximum performance and minimal resource usage</p>
        </div>
        <div class="p-8 border-2 border-red-100 rounded-xl hover:border-red-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1">
          <div class="text-3xl mb-4">🌐</div>
          <h2 class="text-2xl font-bold text-red-700 mb-4">Distributed</h2>
          <p class="text-red-900/70">Scale horizontally across multiple nodes with built-in clustering</p>
        </div>
        <div class="p-8 border-2 border-red-100 rounded-xl hover:border-red-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1">
          <div class="text-3xl mb-4">🔒</div>
          <h2 class="text-2xl font-bold text-red-700 mb-4">Reliable</h2>
          <p class="text-red-900/70">Guaranteed message delivery with persistent storage and replication</p>
        </div>
      </div>

      {/* Stats Section */}
      <div class="bg-red-50 rounded-2xl p-12 my-20">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Why Choose Rafka?</h2>
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-red-700 mb-2">10x</div>
            <div class="text-red-900/70">Faster Than Traditional Solutions</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-red-700 mb-2">99.99%</div>
            <div class="text-red-900/70">Uptime Guarantee</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-red-700 mb-2">&lt;1ms</div>
            <div class="text-red-900/70">Average Latency</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-red-700 mb-2">∞</div>
            <div class="text-red-900/70">Horizontal Scaling</div>
          </div>
        </div>
      </div>

      {/* Code Preview */}
      <div class="my-20">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Simple to Use</h2>
        <div class="bg-gray-900 rounded-xl p-6 shadow-xl">
          <pre class="text-gray-100 overflow-x-auto">
            <code>{`use rafka::client::Client;

#[tokio::main]
async fn main() -> Result<()> {
    let client = Client::connect("localhost:8080").await?;
    
    // Publish a message
    client.publish("my-topic", "Hello, Rafka!").await?;
    
    // Subscribe to messages
    let mut subscriber = client.subscribe("my-topic").await?;
    while let Some(msg) = subscriber.next().await {
        println!("Received: {}", msg);
    }
}`}</code>
          </pre>
        </div>
      </div>

      {/* CTA Section */}
      <div class="text-center my-20">
        <h2 class="text-3xl font-bold text-red-700 mb-6">Ready to Get Started?</h2>
        <p class="text-xl text-red-700/70 mb-8 max-w-2xl mx-auto">
          Join the growing community of developers using Rafka in production.
        </p>
        <div class="flex gap-4 justify-center">
          <a 
            href="/docs" 
            class="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Read the Docs
          </a>
          <a 
            href="/examples" 
            class="bg-red-50 text-red-700 border-2 border-red-200 px-8 py-4 rounded-lg hover:bg-red-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Examples
          </a>
        </div>
      </div>
    </main>
  );
} 