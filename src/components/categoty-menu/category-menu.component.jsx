import './category-menu.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryMenu = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((c) => {
                return (
                <CategoryItem key={c.id} category={c}/>
                );
            })}
        </div>
    );
};


export default CategoryMenu;