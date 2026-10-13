import './appPage.scss';

// Components
import Button from '@/components/ui/Button/Button';

const AppPage = ({ className = '', ...props }) => {
  const pageTitle = 'Título de la página';
  return (
    <section className={`appPage ${className}`} {...props}>
      <img
        className="appPage__imgBanner"
        src="https://admin.esdmadrid.es/wp-content/uploads/2025/02/Rectangle-3468122-2.jpg"
        alt="fotografía del aula 0.8 de la esd de madrid"
      />
      <div className="appPage__header">
        <div className="headerIcon">
          <span className="icon">home</span>
        </div>
        <div className="headerControls">
          <span>Backlinks</span>
          <span>Comments</span>
        </div>
        <div className="headerTitle">
          <h1 className="display">{pageTitle}</h1>
        </div>
      </div>

      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h2 className="appPage__block appPage__block--h1">hola soy un texto</h2>
      <h3 className="appPage__block appPage__block--h2">hola soy un texto</h3>
      <h4 className="appPage__block appPage__block--h3">hola soy un texto</h4>
      <h5 className="appPage__block appPage__block--h4">hola soy un texto</h5>
      <p className="appPage__block appPage__block--p">hola soy un texto</p>
      {/* <small>hola soy un texto</small> */}
      <Button onClick={() => printAlert('click!')} className="mt-8 w-full">
        ¡Pulsa!
      </Button>
    </section>
  );
};

export default AppPage;
