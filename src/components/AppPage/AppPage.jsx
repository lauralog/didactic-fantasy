import './appPage.scss';

// Components
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import Block from '@/components/ui/Block/Block';

const AppPage = ({ activePage, className = '', ...props }) => {
  const { icon, title } = activePage;

  const blocks = [
    {
      id: '2',
      type: 'h1',
      content: 'Mi título 111111',
    },
    {
      id: '3',
      type: 'h2',
      content: 'Mi título 222222',
    },
    {
      id: '4',
      type: 'h3',
      content: 'Mi título 333333',
    },
    {
      id: '5',
      type: 'h4',
      content: 'Mi título 44444',
    },
    {
      id: '1',
      type: 'text',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est hic quidem aliquid error. Quisquam, ducimus ipsum! Minima incidunt sunt voluptas harum sapiente consequatur natus inventore, sint non quos eius sequi.',
    },
    // {
    //   id: '',
    //   type: 'image',
    //   content: '/image.jpg',
    // },
  ];

  return (
    <section className={`appPage ${className}`} {...props}>
      <img
        className="appPage__imgBanner"
        src="https://admin.esdmadrid.es/wp-content/uploads/2025/02/Rectangle-3468122-2.jpg"
        alt="fotografía del aula 0.8 de la esd de madrid"
      />
      {/* PAGE HEADER */}
      <div className="appPage__header">
        <div className="headerIcon">
          <span className="icon">{icon}</span>
        </div>
        <div className="headerControls">
          <span>Backlinks</span>
          <span>Comments</span>
        </div>
        <div className="headerTitle">
          <h1 className="display">{title}</h1>
        </div>
      </div>

      {/* PAGE CONTENT */}
      {/* Render blocks */}
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}

      <Tooltip tooltipText="botón de home">
        <Button>
          <span className="icon text-2xl">home</span>
        </Button>
      </Tooltip>
      <h2 className="block block--h1">hola soy un texto</h2>
      <h3 className="block block--h2">hola soy un texto</h3>
      <h4 className="block block--h3">hola soy un texto</h4>
      <h5 className="block block--h4">hola soy un texto</h5>
      <p className="block block--text">hola soy un texto</p>
      {/* <small>hola soy un texto</small> */}
      {/* <Button onClick={() => printAlert('click!')} className="mt-8 w-full">
        ¡Pulsa!
      </Button> */}
    </section>
  );
};

export default AppPage;
