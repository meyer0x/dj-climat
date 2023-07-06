const Home = () => {
	return (
		<div className="flex flex-col gap-6 items-center flex-1">
			<img
				src="/home.png"
				className="hidden md:block absolute bottom-28 left-0"
				alt="Start"
			/>
			<h1 className="font-bold text-3xl text-center">
				Bienvenue sur DJ du climat
			</h1>
			<p className="text-lg w-2/3 mb-24">
				Plongez au cœur de notre quizz pédagogique captivant sur le climat et
				explorez les enjeux cruciaux de notre époque. Défiez-vous avec des
				questions passionnantes sur les transports écologiques, l'alimentation
				durable, l'optimisation des dépenses publiques et la nécessité de
				surveiller attentivement votre empreinte carbone. Relevez le défi,
				enrichissez vos connaissances et devenez un acteur conscient de la
				préservation de notre planète, tout en vous amusant ! Rejoignez-nous
				pour un voyage éducatif mêlant plaisir et sensibilisation à la cause
				climatique.
			</p>

			<button className="rounded-lg px-6 py-3 bg-orange text-foreground text-lg hover:bg-cyan transition-all duration-500 hover:text-background">
				Start 🚀
			</button>
		</div>
	);
};

export default Home;
