import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from "axios";

const FormItem = Form.Item;

export default class Admin extends Component {
    constructor() {
        super();

        this.state = {
            productname: "",
            productprice: "",
            productcartdesc: "",
            productshortdesc: "",
            productimage: "",
            productstock: "",
            productsize: "",
            productcategory: "",
            files: [],
          };

        }
        createProduct = () => {
            const { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory } = this.state
            axios.post('/api/createProduct', { productname, productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory }).then( res => {
                if ( res.data === "registered" ) {
                    window.location = "/";
                }
                this.clearForm();
            });
        }

        handleFormChange = (e) => {
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
          alert("Item created");
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
                        label="Product Name"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productname } 
                                   placeholder="Name" 
                                   onChange={e => this.setState({ productname: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Price"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productprice } 
                                   placeholder="Price" 
                                   onChange={e => this.setState({ productprice: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Cart Description"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productcartdesc } 
                                   placeholder="Cart Description" 
                                   onChange={e => this.setState({ productcartdesc: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Short Description"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productshortdesc } 
                                   placeholder="Short Description" 
                                   onChange={e => this.setState({ productshortdesc: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Image"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productimage } 
                                   placeholder="Imgage URL" 
                                   onChange={e => this.setState({ productimage: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Stock"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productstock } 
                                   placeholder="Stock Amount" 
                                   onChange={e => this.setState({ productstock: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Size"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productsize }
                                   placeholder="Size" 
                                   onChange={e => this.setState({ productsize: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem
                        label="Product Category"
                        {...formItemLayout}
                        >
                            <Input value= { this.state.productcategory }
                                   placeholder="Category" 
                                   onChange={e => this.setState({ productcategory: e.target.value })}
                                   />
                        </FormItem>
                        <FormItem {...buttonItemLayout}>
                            <Button onClick={() => this.createProduct()} type="primary">Submit</Button>
                        </FormItem>
                    </Form>
      </div>
     </div>
    );
  }
}