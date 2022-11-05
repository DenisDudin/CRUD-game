import { Rating } from '@mui/material';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-list">
                <h3 className="skills-name">Скилы:</h3>
            
                <div className="skills-item">
                    <span className="skills-item__name">Атака</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Стелс</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Стрельба из лука</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Обучаемость</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Выживание</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Медицина</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Запугивание</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Проницательность</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Внешний вид</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div className="skills-item">
                    <span className="skills-item__name">Манипулирование</span>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

            </div>
        </div>
    )
}

export default Skills;