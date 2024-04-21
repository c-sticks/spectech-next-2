"use client";

export function ClientPage() {
  console.log("YYY");

  const onClick = async () => {
    fetch("/api").then(async (res) => {
      const body = await res.json();
      alert(`ftech: ${JSON.stringify(body)}`);
    });
  };

  return (
    <div>
      <button onClick={onClick}>CCCCC</button>
    </div>
  );
}
