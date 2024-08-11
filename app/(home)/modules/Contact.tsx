"use client";
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import Buttons from '@/app/components/Buttons';
import { Resend } from 'resend';
import { responseMessage } from '@/app/utils/Response';

let apiKey = process.env.RESEND_API_KEY
console.log('apiKey', apiKey)
const resend = new Resend(`re_bJCt9hsh_9jhjVefWMe5C94eE9WrfKMg8`);
interface FormValues {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [form] = Form.useForm();
    const [sending, setSending] = useState(false)

    const onFinish = async (values: FormValues) => {
        // Handle form submission logic here
        console.log('Form values:', values);
        setSending(true)
        try {
            const { data, error } = await resend.emails.send({
                from: 'Ansh <onboarding@resend.dev>',
                to: values?.email,
                subject: `New message from ${values?.name}`,
                html: ``
            });

            setSending(false)
            if (error) {
                message.error(responseMessage.FAILED);
                console.log('error', error)
                return Response.json({ error }, { status: 500 });
            }
            message.success(responseMessage.SUCCESS);
            return Response.json(data);
        } catch (error) {
            return Response.json({ error }, { status: 500 });
        }
        form.resetFields(); // Reset form fields after successful submission
    };

    return (
        <section id='contact'>
            <div className='bg-gray-800 py-12 text-white'>
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl text-center mb-8">
                        <h2 className="mb-4">Contact <span className='text-blue-600'>Me!</span></h2>
                        <p>
                            Have a project in mind or simply want to say hello? I’m always excited to connect and collaborate on new ideas. Whether you have a specific vision or just need some guidance, feel free to reach out. Let's bring your ideas to life together. I'm here to listen, create, and make your imagination a reality. Don't hesitate—get in touch today!
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-200 to-blue-600 p-4 rounded-xl">
                        <Form
                            form={form}
                            name="contact_us"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter your name!' }]}
                            >
                                <Input placeholder="Your Name" className='min-h-10 border border-blue-400' />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
                            >
                                <Input placeholder="Your Email" className='min-h-10 border border-blue-400' />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please enter your message!' }]}
                            >
                                <Input.TextArea rows={4} placeholder="Your Message" className='min-h-32 max-h-48 border border-blue-400' />
                            </Form.Item>

                            <Form.Item className='text-center'>
                                <Buttons loading={sending} title='Contact Me!' />
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
