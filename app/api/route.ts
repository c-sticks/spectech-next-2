export async function GET(request: Request) {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const body = await resp.json();
  return Response.json(body);
}

export async function POST(request: Request) {
  console.log("POST called");
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const body = await resp.json();
  return Response.json(body);
}
