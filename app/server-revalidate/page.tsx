async function getData() {
  const res = await fetch("https://delay-api.deno.dev?5s", {
    next: { revalidate: 3 },
  });

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <div>RE VALIDATE</div>
      <code className="whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </code>
    </div>
  );
}
