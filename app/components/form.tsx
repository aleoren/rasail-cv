"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0); // Menyimpan rating yang dipilih
    const [submitted, setSubmitted] = useState(false);
    const [ratingsList, setRatingsList] = useState<number[]>([]); // Menyimpan semua rating yang diterima, tipe array angka

    const handleSubmit = () => {
        // Verifikasi apakah rating valid sebelum menambahkannya ke ratingsList
        if (rating < 1 || rating > 5) {
            alert('Silakan pilih rating antara 1 sampai 5.');
            return;
        }

        console.log('Submitting rating:', rating); // Debugging log

        // Menambahkan rating ke dalam ratingsList
        setRatingsList((prevRatingsList) => {
            console.log('Previous ratings list:', prevRatingsList);  // Debugging prevRatingsList

            // Pastikan prevRatingsList adalah array sebelum ditambahkan rating
            return [...prevRatingsList, rating]; // Menambahkan rating baru ke list
        });

        setSubmitted(true);
    };

    const handleClear = () => {
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setRating(0);
        setSubmitted(false);
    };

    // Menghitung rata-rata rating
    const averageRating = ratingsList.length > 0 
        ? (ratingsList.reduce((sum, val) => sum + val, 0) / ratingsList.length).toFixed(2)
        : 0;

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            {!submitted ? (
                <form>
                    <h2>Contact Form</h2>
                    <label>
                        Nama:
                        <br />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <br /><br />

                    <label>
                        Email:
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <br /><br />

                    <label>
                        Pesan:
                        <br />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            style={{ width: '100%' }}
                        />
                    </label>
                    <br /><br />

                    {/* Rating Section */}
                    <label>
                        Rating (1 sampai 5 bintang):
                        <br />
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                style={{
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: star <= rating ? 'gold' : 'gray'
                                }}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </label>
                    <br /><br />

                    <button type="button" onClick={handleSubmit}>Submit</button>
                    <br />
                    <button type="button" onClick={handleClear}>Clear</button>
                </form>
            ) : (
                <div style={{ fontWeight: 'bold' }}>
                    Nama: {name}, Email: {email}, Pesan: {message}, Rating: {rating} bintang.<br />
                    Data akan segera diinput ke database. Terimakasih!
                </div>
            )}

            {/* Rekap Rata-Rata Rating */}
            <div style={{ marginTop: '20px' }}>
                <h3>Rekap Rata-Rata Rating:</h3>
                <p>
                    {ratingsList.length > 0 
                        ? `Rata-rata Rating: ${averageRating} bintang` 
                        : 'Belum ada rating.'}
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
