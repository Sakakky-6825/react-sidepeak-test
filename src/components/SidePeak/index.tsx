import {
  ElementRef,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { X } from "../../icons/X";

import "./index.css";

/* ## Context ## */
type SidePeakProviderContextValue = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const SidePeakProviderContext = createContext<SidePeakProviderContextValue>(
  {} as SidePeakProviderContextValue
);

/* ## Provider ## */
type SidePeakProviderProps = {
  children: ReactNode;
};

export const SidePeakProvider = ({ children }: SidePeakProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidePeakProviderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidePeakProviderContext.Provider>
  );
};

/* ## Trigger ## */
type SidePeakTriggerProps = {
  children: string;
};

export const SidePeakTrigger = ({ children }: SidePeakTriggerProps) => {
  const { setIsOpen } = useContext(SidePeakProviderContext);

  return (
    <button
      type="button"
      className="side-peak-trigger"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {children}
    </button>
  );
};

/* ## ViewPort ## */
type SidePeakViewportElement = ElementRef<"div">;

export const SidePeakViewport = forwardRef<SidePeakViewportElement>(() => {
  const { isOpen, setIsOpen } = useContext(SidePeakProviderContext);
  return (
    <>
      {isOpen && (
        <div className="side-peak-viewport">
          <button
            type="button"
            className="side-peak-viewport-close-button"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>
      )}
    </>
  );
});
