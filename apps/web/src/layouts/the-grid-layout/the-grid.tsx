import { DefaultCard } from "@/widgets/cards";
import "./style.css";

export const TheGridLayout = () => {
	return (
		<section id="the-grid" className="container">
			<DefaultCard className="col-span-2 row-span-1">
				<p>
					Fullstack Web Developer based in Morocco, originally from Casablanca.
					where I build and optimize web applications to deliver seamless user
					experiences. My expertise spans frontend and backend development, with
					a focus on creating responsive, scalable, and performant solutions.
					<br />
					<br />I enjoy turning ideas into reality, whether it’s crafting
					intuitive interfaces or architecting robust APIs. Always learning,
					always building—for today’s challenges and tomorrow’s innovations.
				</p>
			</DefaultCard>
		</section>
	);
};
