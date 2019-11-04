import React, {useState} from 'react';

import Input from "../../components/inputs/Input";
import TextArea from "../../components/text-area/TextArea";
import Button from "../../components/button/Button";
import allFieldsValues from "../../components/hoc/allFieldsValues";
import Notification from "../../components/notification/Notification";
import notificationHoc from "../../components/hoc/notificationHoc";
import InputWithIcon from "../../components/inputs/InputWithIcon";
import Checkbox from "../../components/checkbox/Checkbox";
import {activeLink} from "../../constants/helper-functions";
import history from "../../history";
import './styles.css';

const TopicContent = ({...props}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');

    const {data} = props;
    const defTitle = title || (data && data.title);
    const defDescription = description || (data && data.description);
    const defBudget = budget || (data && data.budget);

    function onContinue(e) {
        e.preventDefault();
        const data = {title, description, budget};
        const storedData = JSON.parse(localStorage.getItem('data'));

        if (defTitle === undefined || defDescription === undefined || defDescription.length < 500) {
            props.showNotification()
        } else {
            props.hideNotification();
            activeLink(2);
            const newData = Object.assign({}, storedData, data);
            localStorage.setItem("data", JSON.stringify(newData));
            localStorage.setItem("asideActiveLinks", JSON.stringify([1, 2]));
            history.push('/dashboard/media')
        }
    };

    return (
        <div className="topic-content">
            <Notification {...props}/>
            <h1>Topic content</h1>
            <article>
                Give name to the topic that will attract as many people as possible.
                The more people upvoted for it, the more are chances that it will be started.
                Describe project and why it is important to start.
            </article>
            <form>

                <Input
                    type="text"
                    className="input-group"
                    label="Title"
                    id="title"
                    placeholder="Write title"
                    required={true}
                    value={defTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextArea
                    className="input-group"
                    label="Desciription"
                    id="description"
                    placeholder="Topic description"
                    min={500}
                    required={true}
                    value={defDescription}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <InputWithIcon
                    type="number"
                    className="input-group"
                    label="Rough project budget"
                    placeholder="Wtite amount"
                    text="amd"
                    id="amount"
                    value={defBudget}
                    onChange={(e) => setBudget(e.target.value)}
                />
                <Checkbox
                    id="not-sure"
                    className="chb"
                    label="I am not sure how much amount is required"
                    type="checkbox"
                />
                <Button
                    text="CONTINUE"
                    className="btn-continue"
                    onClick={onContinue}
                />
            </form>
        </div>
    );
}

export default notificationHoc(allFieldsValues(TopicContent), "Fill required fields");
