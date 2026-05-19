import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Инициализация клиента Resend
// API Ключ должен быть добавлен в файл .env.local как RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, area } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны для заполнения' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Мягкие окна <onboarding@resend.dev>', // Замените на ваш подтвержденный домен в Resend
      to: ['k.vladmirov@yandex.ru'], // Замените на email, куда должны приходить заявки
      subject: 'Новая заявка с сайта Мягкие окна',
      html: `
        <h2>Новая заявка на расчет стоимости</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Примерная площадь:</strong> ${area ? `${area} м²` : 'Не указана'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Произошла непредвиденная ошибка' },
      { status: 500 }
    );
  }
}
