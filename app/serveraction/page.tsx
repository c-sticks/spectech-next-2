export default async function Page() {
  async function action(formData: FormData) {
    "use server";
    const name = formData.get("name");
    console.log(`server action triggered: name is ${name}`);
  }

  return (
    <div>
      <form action={action}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
