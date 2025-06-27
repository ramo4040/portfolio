import './style.css'

export const MusicListeningCard = () => {
	return (
		<div id='music-card-conatiner'>
			<div className='music-background'>
				<div className='description'>
					<p>Currently Listening</p>
					<small>
						Hajib <span>Brawl</span>
					</small>
				</div>
				<div className='cd-cover' />
			</div>
		</div>
	)
}
