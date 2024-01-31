export default function handler(req, res) {
    if (req.method === 'GET') {
        // Perform login logic here
        // ...

        // If login is successful
        res.status(200).json({ message: 'hello world' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
