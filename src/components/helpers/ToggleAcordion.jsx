import { Button, useAccordionButton } from "react-bootstrap";
export function ToggleAcordion({ children, eventKey }) {
  const abreCierraAcordion = useAccordionButton(eventKey, () =>
    {}
  );

  return (
    <Button
      type="button"
      onClick={abreCierraAcordion}
      className="linkDetalle text-white"
    >
      {children}
    </Button>
  );
}
