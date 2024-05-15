import './ToggleSwitch.css';

type Props = {
  className: string;
  onSwitchHit: () => void;
  label: string;
};

export function ToggleSwitch({ className, onSwitchHit, label }: Props) {
  return (
    <div className={className} onClick={onSwitchHit}>
      <div className="slider">
        <div className="switch" />
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
