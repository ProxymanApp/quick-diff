import dynamic from "next/dynamic";
import NavigationMenu from "../components/navigation menu/NavigationMenu";
import Footer from "../components/footer/Footer";
import MainHead from "../components/head/head";

const MonacoEditorWithNoSSR = dynamic(
  () => import("../components/editor/MonacoEditor"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <MainHead></MainHead>
      <div className="w-full h-full px-10 py-4">
        <NavigationMenu />
        <MonacoEditorWithNoSSR />
        <Footer />
      </div>
    </div>
  );
}
