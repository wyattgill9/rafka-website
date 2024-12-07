export default function DocumentationPage() {
  return (
    <main class="mx-auto p-4 max-w-7xl">
      {/* Header */}
      <div class="text-center py-12">
        <h1 class="text-5xl text-red-700 font-bold mb-4">Documentation</h1>
        <p class="text-xl text-red-900/70 max-w-3xl mx-auto">
          Everything you need to know about building with Rafka
        </p>
      </div>

      {/* Documentation Grid */}
      <div class="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <nav class="lg:col-span-1 space-y-1">
          <h3 class="font-semibold text-red-900 mb-4 text-lg">Getting Started</h3>
          <a href="#installation" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Installation</a>
          <a href="#quickstart" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Quick Start</a>
          <a href="#configuration" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Configuration</a>
          
          <h3 class="font-semibold text-red-900 mt-8 mb-4 text-lg">Core Concepts</h3>
          <a href="#topics" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Topics</a>
          <a href="#producers" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Producers</a>
          <a href="#consumers" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Consumers</a>
          
          <h3 class="font-semibold text-red-900 mt-8 mb-4 text-lg">Advanced</h3>
          <a href="#clustering" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Clustering</a>
          <a href="#persistence" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Persistence</a>
          <a href="#security" class="block p-2 text-red-700 hover:bg-red-50 rounded-lg">Security</a>
        </nav>

        {/* Main Content */}
        <div class="lg:col-span-3 space-y-12">
          {/* Installation */}
          <section id="installation" class="scroll-mt-16">
            <h2 class="text-3xl font-bold text-red-700 mb-6">Installation</h2>
            <div class="bg-gray-900 rounded-xl p-6 mb-4">
              <pre class="text-gray-100 overflow-x-auto">
                <code>$ cargo install rafka</code>
              </pre>
            </div>
            <p class="text-red-900/70 mb-4">
              Rafka is available as a Rust binary. You can install it using cargo, Rust's package manager.
            </p>
          </section>

          {/* Quick Start */}
          <section id="quickstart" class="scroll-mt-16">
            <h2 class="text-3xl font-bold text-red-700 mb-6">Quick Start</h2>
            <div class="prose prose-red max-w-none">
              <h3 class="text-xl font-semibold mb-4">1. Start the Server</h3>
              <div class="bg-gray-900 rounded-xl p-6 mb-4">
                <pre class="text-gray-100 overflow-x-auto">
                  <code>$ rafka server start</code>
                </pre>
              </div>

              <h3 class="text-xl font-semibold mb-4">2. Create a Producer</h3>
              <div class="bg-gray-900 rounded-xl p-6 mb-4">
                <pre class="text-gray-100 overflow-x-auto">
                  <code>{`use rafka::client::Client;

#[tokio::main]
async fn main() -> Result<()> {
    let client = Client::connect("localhost:8080").await?;
    client.publish("my-topic", "Hello, World!").await?;
}`}</code>
                </pre>
              </div>

              <h3 class="text-xl font-semibold mb-4">3. Create a Consumer</h3>
              <div class="bg-gray-900 rounded-xl p-6 mb-4">
                <pre class="text-gray-100 overflow-x-auto">
                  <code>{`use rafka::client::Client;

#[tokio::main]
async fn main() -> Result<()> {
    let client = Client::connect("localhost:8080").await?;
    let mut subscriber = client.subscribe("my-topic").await?;
    
    while let Some(msg) = subscriber.next().await {
        println!("Received: {}", msg);
    }
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section id="configuration" class="scroll-mt-16">
            <h2 class="text-3xl font-bold text-red-700 mb-6">Configuration</h2>
            <div class="bg-gray-900 rounded-xl p-6 mb-4">
              <pre class="text-gray-100 overflow-x-auto">
                <code>{`# rafka.toml

[server]
host = "0.0.0.0"
port = 8080

[storage]
path = "/var/lib/rafka"
retention_days = 7

[cluster]
nodes = ["node1:8080", "node2:8080"]`}</code>
              </pre>
            </div>
            <p class="text-red-900/70">
              Rafka can be configured using a TOML file. Create a <code class="bg-red-50 px-2 py-1 rounded">rafka.toml</code> file in your project root.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </main>
  );
} 