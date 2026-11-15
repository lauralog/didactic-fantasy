import './_ChangeBlockTypeMenu.scss';

// Components
import Divider from '@/components/ui/Divider';

const colors = [
  { name: 'Default', color: 'default' },
  { name: 'Gray', color: 'gray' },
  { name: 'Brown', color: 'brown' },
  { name: 'Orange', color: 'orange' },
  { name: 'Yellow', color: 'yellow' },
  { name: 'Green', color: 'green' },
  { name: 'Blue', color: 'blue' },
  { name: 'Purple', color: 'purple' },
  { name: 'Pink', color: 'pink' },
  { name: 'Red', color: 'red' },
];

const ChangeBlockColorsMenu = () => {
  return (
    <div className="menuWrapper menuWrapper--nested">
      {/* LAST USED */}
      <section className="colorMenu__section">
        <span className="colorMenu__title">Last used</span>

        <button className="colorMenu__item colorMenu__item--recent">
          <span className="colorMenu__preview colorMenu__preview--text colorMenu__preview--gray">
            A
          </span>
          <span className="colorMenu__label">Gray text</span>
          <span className="colorMenu__shortcut">⌘⇧H</span>
        </button>
      </section>

      <Divider className="px-2" />

      {/* TEXT COLOR */}
      <section className="colorMenu__section">
        <span className="colorMenu__title">Text color</span>

        {colors.map(({ name, color }) => (
          <button key={color} className="colorMenu__item">
            <span
              className={`colorMenu__preview colorMenu__preview--text colorMenu__preview--${color}`}
            >
              A
            </span>

            <span className="colorMenu__label">{name} text</span>
          </button>
        ))}
      </section>

      <div className="colorMenu__divider" />

      {/* BACKGROUND COLOR */}
      <section className="colorMenu__section">
        <span className="colorMenu__title">Background color</span>

        {colors.map(({ name, color }) => (
          <button key={color} className="colorMenu__item">
            <span
              className={`colorMenu__preview colorMenu__preview--background colorMenu__preview--${color}`}
            />

            <span className="colorMenu__label">{name} background</span>
          </button>
        ))}
      </section>
    </div>
  );
};

export default ChangeBlockColorsMenu;
