import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function OverlayTooltip({children, text}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 200, hide: 100 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default OverlayTooltip;