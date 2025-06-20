import { TheGridLayout } from "@/layouts/the-grid-layout/the-grid";
import { TopNavbar } from "@/widgets/top-navbar/top-navbar";
import { Yassir } from "@/widgets/yassir/yassir";

export default function Home() {
	return (
		<main>
			<TopNavbar />
			<Yassir />
			<TheGridLayout />
		</main>
	);
}
