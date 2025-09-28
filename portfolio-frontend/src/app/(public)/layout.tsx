import Squares from "@/components/animations/SquareBG";
import Navbar from "@/components/common/navbar/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-0 w-full h-full">
        <Squares borderColor={"#00000010"} direction="diagonal" speed={0.2} />
      </div>
      <Navbar />
      <div className="min-h-dvh mt-[80px]">{children}</div>
    </div>
  );
};

export default PublicLayout;
