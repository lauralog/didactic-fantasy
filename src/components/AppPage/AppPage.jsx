import './appPage.scss';

// Data
import notionBlocks from '@/models/blocks.json';

// Components
import Button from '@/components/ui/Button/Button';
import Tooltip from '@/components/ui/Tooltip/Tooltip';
import Block from '@/components/ui/Block/Block';

// Hooks
import useGetActivePageBlocks from '@/hooks/useGetActivePageBlocks';

const AppPage = ({ activePage, className = '', ...props }) => {
  const { icon, title } = activePage;
  const activePageBlocks = useGetActivePageBlocks(activePage, notionBlocks);

  return (
    <main className={`appPage ${className}`} {...props}>
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
          <Button variant="tertiary" style="ghost" size="sm">
            <span className="icon">south_west</span>
            <span>Backlinks</span>
          </Button>
          <Button variant="tertiary" style="ghost" size="sm">
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
      <section className="appPage__content">
        {activePageBlocks.length === 0 ? (
          <div className="emptyPageAlert">Press / to insert block</div>
        ) : (
          activePageBlocks.map((block) => <Block key={block.id} block={block} />)
        )}
      </section>
    </main>
  );
};

export default AppPage;
