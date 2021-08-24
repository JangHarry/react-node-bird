import {Form, Input} from 'antd';
import { useSelector } from 'react-redux';
import {useState} from 'react';


const PostForm = () => {
    const {imagePaths} = useSelector((state) => state.post);
    const [text, onChangeText] = useState('')
    return(
        <Form style = {{margin : '10px 0 20px'}} encType="multipart/form-data" onFinish={onsubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden/>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{float:'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map}
            </div>
        </Form>
    )
}