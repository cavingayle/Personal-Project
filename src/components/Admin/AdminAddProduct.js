import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'
import axios from 'axios';

const FormItem = Form.Item;
const CLOUDINARY_UPLOAD_URL ='https://api.cloudinary.com/v1_1/dbwgwsaeg/image/upload';


export default class AdminAddProduct extends Component {
    constructor() {
        super();

        this.state = {
            productname: '',
            productprice: '',
            productcartdesc: '',
            productshortdesc: '',
            productimage: '',
            productstock: '',
            productsize: '',
            productcategory: '',
            files: [],
          };

        }

        // componentDidMount() {
        //     console.log('hit')
        // }

        uploadImage = ( file ) => {
            console.log( 'inside uploadfile', file );
            axios.get( '/api/upload').then( response => {
              console.log( 'response data', response.data );
        
              let formData = new FormData();
              formData.append( 'signature', response.data.signature );
              formData.append( 'api_key', '155942765433368' );
              formData.append( 'timestamp', response.data.timestamp );
            //   formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
              formData.append('file', file[0]);
        
              axios.post( CLOUDINARY_UPLOAD_URL, formData ).then( response => {
                this.setState({ uploadUrl: response.data.secure_url });
                console.log( 'Image url is ', this.state.uploadUrl );
              });
            }).catch( err => {
                console.log( err );
                })
          }

        createProduct = () => {
            const { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory } = this.state
            axios.post( '/api/createProduct', { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory }).then( res => {
                if ( res.data === 'registered' ) {
                    window.location = '/';
                }
                this.clearForm();
            });
        }

        handleFormChange = ( e ) => {
            this.setState({ [e.target.name]: e.target.value });
          }

        clearForm = () => {
            this.setState({
                productname: '',
                productprice: '',
                productcartdesc: '',
                productshortdesc: '',
                productimage: '',
                productstock: '',
                productsize: '',
                productcategory: '',
                uploadUrl:'',
                formLayout: 'horizontal',
          });
          alert( 'Item created' );
        }

    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <div>
                <div>
                    <Form layout={formLayout}>
                        
                        <FormItem
                        label='Product Name'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productname } 
                                   placeholder='Name' 
                                   onChange= {e => this.setState({ productname: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Price'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productprice } 
                                   placeholder='Price' 
                                   onChange={e => this.setState({ productprice: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Cart Description'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productcartdesc } 
                                   placeholder='Cart Description' 
                                   onChange={e => this.setState({ productcartdesc: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Short Description'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productshortdesc } 
                                   placeholder='Short Description' 
                                   onChange={ e => this.setState({ productshortdesc: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Image'
                        { ...formItemLayout }
                        >
                            <Input 
                                   type='file'
                                   value= { this.state.productimage } 
                                   placeholder='Imgage URL' 
                                   onChange={ () => this.uploadImage( this.state.productimage )}
                                   />
                            {/* <button onClick={(e) => this.uploadImage({ productimage: e.target.value })}>Choose file</button> */}
                        </FormItem>
                        <FormItem
                        label='Product Stock'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productstock } 
                                   placeholder='Stock Amount' 
                                   onChange={ e => this.setState({ productstock: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Size'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productsize }
                                   placeholder='Size' 
                                   onChange={ e => this.setState({ productsize: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label='Product Category'
                        { ...formItemLayout }
                        >
                            <Input value= { this.state.productcategory }
                                   placeholder='Category' 
                                   onChange={ e => this.setState({ productcategory: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem { ...buttonItemLayout }>
                            <Button onClick={ () => this.createProduct()} type='primary'>Submit</Button>
                        </FormItem>
                    </Form>
      </div>
     </div>
    );
  }
}