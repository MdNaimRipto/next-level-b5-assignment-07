import Squares from "@/components/animations/SquareBG";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-50 w-full h-full">
        <Squares borderColor={"#00000010"} direction="diagonal" speed={0.2} />
      </div>
      <Navbar />

      <div className="min-h-dvh">{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
