export default async function Page() {
  const aa = () => {};

  return (
    <div>
      <form aaa={aa}>
        <input type="text" placeholder="Enter your name" />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
