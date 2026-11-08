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
          <Button variant="primary" style="solid">
            <span className="icon">south_west</span>
            <span>Backlinks</span>
          </Button>
          <Button variant="secondary" style="outline">
            <span className="icon">chat</span>
            <span>Add comment</span>
          </Button>
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
    </section>
  );
};

export default AppPage;
