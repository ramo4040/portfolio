import {
	type FC,
	type PropsWithChildren,
	createContext,
	useContext,
	useId,
	useState,
} from 'react'

export type TooltipContextType = {
	isOpen: boolean
	idTooltip: string
	handleToggleTooltip: () => void
}

export const tooltipContext = createContext<TooltipContextType>(
	{} as TooltipContextType,
)

export const ToolTipProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const idTooltip = useId()

	const handleToggleTooltip = () => {
		setIsOpen(!isOpen)
	}

	const value: TooltipContextType = {
		isOpen,
		idTooltip,
		handleToggleTooltip,
	}

	return (
		<tooltipContext.Provider value={value}>{children}</tooltipContext.Provider>
	)
}

export const useTooltip = () => {
	return useContext(tooltipContext)
}
