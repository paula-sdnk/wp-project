const server = Bun.serve({
  port: 3000,
  hostname: "0.0.0.0",
  fetch(req) {
    return new Response("Hello from Bun server in Docker!");
  },
});

console.log(`Server running at http://${server.hostname}:${server.port}`);
