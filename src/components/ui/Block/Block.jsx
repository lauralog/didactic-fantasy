import './block.scss';

import Button from '@/components/ui/Button/Button';

/** BLOCK INTERFACE */
//   id: string;
//   content: any;
//   type: string;
//   createdBy: string;
//   lastModifiedBy: string;
//   creationDate: string;
//   lastModifiedDate: string;

const Text = ({ block, className = '' }) => {
  return <p className={className}>{block.content}</p>;
};

const Heading1 = ({ block, className = '' }) => {
  return <h2 className={className}>{block.content}</h2>;
};
const Heading2 = ({ block, className = '' }) => {
  return <h3 className={className}>{block.content}</h3>;
};
const Heading3 = ({ block, className = '' }) => {
  return <h4 className={className}>{block.content}</h4>;
};
const Heading4 = ({ block, className = '' }) => {
  return <h5 className={className}>{block.content}</h5>;
};

const Block = ({ block, className = '', ...props }) => {
  const blockTypes = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    text: Text,
    // quote: Quote,
    // bulletList: BulletList,
    // toggleList: ToggleList,
    // callout: Callout,
    // image: Image,
  };
  const BlockType = blockTypes[block.type];

  console.log(blockTypes[block.type]);

  return (
    <article
      block={block}
      className="block relative"
      data-block-id={block.id}
      data-block-type={block.type}
    >
      <div className="block__handlers">
        {/* Modify >>> Btn comp: handler */}
        <Button onlyIcon={true} style="ghost">
          <span className="icon">add</span>
        </Button>
        <Button style="ghost" onlyIcon={true} className="!aspect-auto">
          <span className="icon">drag_indicator</span>
        </Button>
      </div>

      {/* BLOCK CONTENT */}
      <div className={`block__content block--${block.type} ${className}`} {...props}>
        <BlockType block={block} className="blockContent" />
      </div>
    </article>
  );
};

export default Block;
