import DesktopFirst from "@/components/layout/DesktopFirst";
import ProductCardDesktop from "@/components/ui/product-card-desktop";

export default function Page() {
  return (
<div className="flex flex-col">

    <div>
    <DesktopFirst/>
    </div>

    <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
    <ProductCardDesktop/>
    <ProductCardDesktop/>
    <ProductCardDesktop/>
    <ProductCardDesktop/>
    <ProductCardDesktop/>
    <ProductCardDesktop/>
    </div>


</div>
);
}
