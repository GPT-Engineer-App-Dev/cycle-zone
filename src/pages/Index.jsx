function Index() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MotoWorld</h1>
        <p className="text-lg mb-6">Discover the latest models, find dealers near you, and get in touch with us.</p>
        <div className="flex space-x-4">
          <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Explore Models</a>
          <a href="#" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg">Find Dealers</a>
        </div>
      </div>
    </main>
  );
}

export default Index;