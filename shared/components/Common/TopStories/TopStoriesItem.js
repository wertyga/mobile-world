import _JSXStyle from 'styled-jsx/style';
import styles from './styles/top-stories-item'

export const TopStoriesItem = ({ list }) => {
  console.log(list);
  return (
    <div className="top-stories__item">
      {list.map(({ _id, previewImage, previewName }, i) => (
        <div
          className={cn(
            'top-stories__item__article',
            { wide: i === 0 },
          )}
          key={`${_id}-${i}`}
        >
          <img src={previewImage} alt={previewName} />
          <div className="content">{previewName}</div>
        </div>
      ))}

      <style jsx>{styles}</style>
    </div>
  );
}