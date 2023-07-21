import { Button, useAccordionButton } from 'react-bootstrap';
export function ToggleAcordion({ children, eventKey }) {
  const abreCierraAcordion = useAccordionButton(eventKey, () =>
    console.log('Se ejecuta el evento click y abre o cierra el acordion')
  );

  return (
    <Button type="button" onClick={abreCierraAcordion} className="linkDetalle">
      {children}
    </Button>
  );
}
