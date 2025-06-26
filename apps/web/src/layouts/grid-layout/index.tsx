import './style.css'

interface GridLayoutProps {
	children: React.ReactNode
	rows: number
	cols: number
	className?: string
}

export const GridLayout = ({
	children,
	rows,
	cols,
	className = '',
}: GridLayoutProps) => {
	return (
		<section
			className={`grid-layout container ${className}`}
			style={
				{
					'--grid-rows': rows,
					'--grid-cols': cols,
				} as React.CSSProperties
			}
		>
			{children}
		</section>
	)
}
