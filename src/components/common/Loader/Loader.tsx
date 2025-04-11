import styles from './Loader.module.css';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
