import {
	type FC,
	type PropsWithChildren,
	createContext,
	useContext,
	useState,
} from 'react'

export type TooltipContextType = {
	isOpen: boolean
	handleToggleTooltip: () => void
}

export const tooltipContext = createContext<TooltipContextType>({
	isOpen: false,
	handleToggleTooltip: () => null,
})

export const ToolTipProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggleTooltip = () => {
		setIsOpen(!isOpen)
	}

	const value: TooltipContextType = {
		isOpen,
		handleToggleTooltip,
	}

	return (
		<tooltipContext.Provider value={value}>{children}</tooltipContext.Provider>
	)
}

export const useTooltip = () => {
	return useContext(tooltipContext)
}
