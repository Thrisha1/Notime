import react from 'react';

const InputField = () => {
    return (
        <div>
            <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-500">Email</label>
                <input type="text" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
        </div>
    )
}