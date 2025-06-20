import { DefaultCard } from "@/widgets/cards";
import "./style.css";
import { ProjectCard } from "@/widgets/cards/project-card/project-card";
import Image from "next/image";

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

			<ProjectCard
				className="col-span-2 row-span-2"
				theme="#fff"
				color="#000"
				imageAlt="Mindsprint Project"
				imageSrc="/images/projects/mindsprint/mindsprint-bg.png"
				href="#"
				title="Mindsprint"
				description="MindSprint is an AI-powered online learning platform designed to empower developers with personalized, interactive learning experiences."
			/>

			<DefaultCard className="col-span-1 row-span-1">
				<Image src="/images/my-location.png" fill alt="My location" />
			</DefaultCard>
		</section>
	);
};
