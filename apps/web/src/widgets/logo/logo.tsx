import './style.css'
import logoSvg from '@/public/images/logo.svg'
import Image from 'next/image'

export const Logo = () => {
	return (
		<div id='logo'>
			<Image src={logoSvg} alt='Logo' width={100} height={60} />
		</div>
	)
}
