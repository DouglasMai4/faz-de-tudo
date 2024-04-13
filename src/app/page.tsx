import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard/index";

export default function Home() {
  return (
    <>
      <Header name="Douglas Maia" image="https://github.com/douglasmai4.png" userAccount={ true } />
      <Dashboard />
    </>
  );
}
