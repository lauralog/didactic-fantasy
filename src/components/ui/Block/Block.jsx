import './block.scss';

import Button from '@/components/ui/Button/Button';
import CollapsibleMenu from '@/components/ui/CollapsibleMenu/CollapsibleMenu';
import BlockEditionMenu from './_BlockEditionMenu/BlockEditionMenu';

const Text = ({ block, className = '' }) => {
  return <p className={`p blockContent--text ${className}`}>{block.content}</p>;
};

const Heading1 = ({ block, className = '' }) => {
  return <h2 className={`h1 ${className}`}>{block.content}</h2>;
};

const Heading2 = ({ block, className = '' }) => {
  return <h3 className={`h2 ${className}`}>{block.content}</h3>;
};

const Heading3 = ({ block, className = '' }) => {
  return <h4 className={`h3 ${className}`}>{block.content}</h4>;
};

const Heading4 = ({ block, className = '' }) => {
  return <h5 className={`h4 ${className}`}>{block.content}</h5>;
};

// OK
const Block = ({ block, className = '', ...props }) => {
  const blockTypes = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    text: Text,
  };

  const BlockType = blockTypes[block.type];

  if (!BlockType) return null;

  return (
    <article className="block relative" data-block-id={block.id} data-block-type={block.type}>
      <div className="block__handlers">
        <Button style="ghost">
          <span className="icon">add</span>
        </Button>

        {/* DRAG + EDIT HANDLER */}
        <CollapsibleMenu
          trigger={({ isOpen, toggleMenu }) => (
            <Button
              onClick={toggleMenu}
              style="ghost"
              className="aspect-auto"
              aria-expanded={isOpen}
              aria-label="Toggle block edition menu"
            >
              <span className="icon">drag_indicator</span>
            </Button>
          )}
        >
          <BlockEditionMenu />
        </CollapsibleMenu>
      </div>

      {/* BLOCK CONTENT */}
      <div className={`block__content block--${block.type} ${className}`} {...props}>
        <BlockType block={block} className="blockContent" />
      </div>
    </article>
  );
};

export default Block;
